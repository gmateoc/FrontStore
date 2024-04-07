import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Header } from '../header/Header';
import { useFetchQuery } from '../../hooks/commons/useFetchQuery';
import { useParams } from 'react-router-dom';
import { Cards } from '../games/CardGames';
import { GamesForm } from '../games/GamesForm';
import {Checkbox} from "primereact/checkbox";
import {Slider} from "primereact/slider";
import {Dropdown} from 'primereact/dropdown';
import { BuyCar } from '../buyCar/BuyCar';

export const Catalog = () => {

    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [active,setActive] = useState(false);
    const [orderGame,setOrderGame] = useState('');
    const [listBuyCar, setListBuyCar] = useState([]);
    const id = useParams();

    const gamesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/games/all', params: '', token: id.token, queryName: 'gamesAll'});

    const companyGamesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/company-games', params: '', token: id.token, queryName: 'CompanyGamesAll'});

    const companiesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/companies/all', params: '', token: id.token, queryName: 'companies'});

    const updateCompanyGames = Array.isArray(companyGamesQuery?.data?.data) && companyGamesQuery?.data?.data.map(companyGame=>{
        const game = gamesQuery?.data?.data.find(game => game.id === companyGame.game_id);
        const company = companiesQuery?.data?.data.find(company => company.id === companyGame.company_id);
        return{
            ...companyGame,
            game: game,
            company: company
        }
    })

    const handleActive = () =>{
        setActive(true);
    }

    const handleReloadCards = () =>{
        gamesQuery.refetch();
        companyGamesQuery.refetch();
        companiesQuery.refetch();
        updateCompanyGames.refetch();
    }

    const onPriceRangeChange = (e) => {
        setPriceRange(e.value);
    };

    const data = {
        name: ['Compañías','Precios']
    }

    const onOptionChange = (e, optionId, optionType) => {
        const isChecked = e.target.checked;

        switch(optionType){
            case 'Compañías':
                setSelectedCompanies(prevSelectedCompanies =>{
                    if(isChecked){
                        return [...prevSelectedCompanies, optionId];
                    } else {
                        return prevSelectedCompanies.filter(id => id!==optionId);
                    }
                });
                break;
        }
    }

    const getCheckedState = (optionType, optionId) => {
        switch(optionType){
            case 'Compañías':
                return selectedCompanies.includes(optionId);
            default:
                return false;
        }
    }

    const companyIdToNameMap = {};
    companiesQuery?.data?.data.forEach((company,index)=>{
        companyIdToNameMap[index] = company.id;
    });

    const filterOptions = () => {
        const filteredOptions = updateCompanyGames.filter(companyGame => {
            const companyId = companyGame.company_id;
            const isCompanyMatch = selectedCompanies.includes(companyId);

            const companyPrice = parseInt(companyGame.price);
            const isPriceInRange = companyPrice >=priceRange[0] && companyPrice<=priceRange[1];

            if(selectedCompanies.length>=1 && (priceRange[0]>0 || priceRange[1]<200)){
                return isCompanyMatch && isPriceInRange;
            } else if(selectedCompanies.length>=1){
                return isCompanyMatch;
            }else{
                return isPriceInRange;
            }
        });
        
        if(orderGame==='0'){
            const lessName = filteredOptions.sort((a, b) => {
                const nameA = a.game.nombre[0];
                const nameB = b.game.nombre[0];

                if(nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0;
            })
            return lessName;
        }else if(orderGame==='1'){
            const lessPrice = filteredOptions.sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);

                return priceA - priceB;
            })

            return lessPrice;
        }else if(orderGame==='2'){
            const morePrice = filteredOptions.sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);

                return priceB - priceA;
            })
            return morePrice;
        }else{
            return filteredOptions;
        }
    };

    const options = [
        {label: 'Nombre de juego', value:'0'},
        {label: 'Precio más bajo', value: '1'},
        {label: 'Precio más alto', value: '2'},
        {label: 'Ninguno', value: '3'},
    ]

    return (
        < >
            <Row>
                <Header/>
            </Row>
            <Row>
                <div style={{display:'flex' ,justifyContent:'center', alignItems:'center'}}>
                    <GamesForm handleReloadCards={handleReloadCards} />
                    <BuyCar listBuyCar={listBuyCar} setListBuyCar={setListBuyCar}/>
                </div>
            </Row>
            <Row>
                <div style={{display:'flex'}}>
                    <div style={{width:'300px'}}>
                        <h2>Ordenar por:</h2>
                        <div style={{marginTop:'20px'}}>
                            <Dropdown
                                value={orderGame}
                                options={options}
                                placeholder='Seleccionar'
                                onChange={(e)=>{
                                    setOrderGame(e.target.value);
                                    handleActive();
                                }}
                            />
                        </div>
                        <h1>
                            Juegos
                        </h1>
                        <div>
                            <div>
                                <details>
                                    <summary>
                                        {data.name[0]}
                                    </summary>
                                    <div style={{marginBottom:'20px'}}>
                                        <section>
                                            {
                                                companiesQuery?.data?.data.isPending ? (
                                                    <p>Loading...</p>
                                                )
                                                : 
                                                (
                                                    Array.isArray(companiesQuery?.data?.data) && companiesQuery?.data?.data.map(company=>(
                                                        <div key={company.id} style={{marginTop:'10px'}}>
                                                            <Checkbox
                                                                inputId={company.id}
                                                                name='Compañía'
                                                                value={company.nombre}
                                                                onChange={(e) => {
                                                                    onOptionChange(e,company.id,data.name[0]);
                                                                    handleActive();
                                                                }}
                                                                checked={getCheckedState(data.name[0],company.id)}
                                                            />
                                                            <label style={{paddingLeft:'15px'}}>
                                                                {company.nombre}
                                                            </label>
                                                        </div>
                                                    ))
                                                )
                                            }
                                        </section>
                                    </div>
                                </details>
                                <details>
                                    <summary>
                                        {data.name[1]}
                                    </summary>
                                    <div>
                                        <section>
                                            <div style={{marginTop:'20px'}}>
                                                <Slider 
                                                    id='princeRange'
                                                    range
                                                    value={priceRange}
                                                    min={0}
                                                    max={200}
                                                    onChange={(e)=>{
                                                        onPriceRangeChange(e);
                                                        handleActive();
                                                    }}
                                                />
                                                <div style={{marginTop:'10px', textAlign:'center'}}>
                                                    ${priceRange[0]} - ${priceRange[1]}
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        {
                            updateCompanyGames.isPending ? 
                            (
                                <p>Loading...</p>
                            )
                            :
                            (selectedCompanies.length===0 && (orderGame==='3' || orderGame.length===0)) && priceRange[0]===0 && priceRange[1]===200 ?
                                Array.isArray(updateCompanyGames) && updateCompanyGames.map(companyGame=>(
                                    <Cards key={companyGame.game.id} companyGame={companyGame} listBuyCar={listBuyCar} setListBuyCar={setListBuyCar}/>
                                ))
                            :
                                (active) ?
                                    (filterOptions(updateCompanyGames).length<1) ?
                                        <p>No se encontraron coincidencias...</p>
                                    :
                                    filterOptions(updateCompanyGames).map(companyGame => (
                                        <Cards key={companyGame.game.id} companyGame={companyGame} listBuyCar={listBuyCar} setListBuyCar={setListBuyCar}/>
                                    ))
                                :
                                (
                                    (updateCompanyGames) ?
                                    Array.isArray(updateCompanyGames) && updateCompanyGames.map(companyGame=>(
                                        <Cards key={companyGame.game.id} companyGame={companyGame} listBuyCar={listBuyCar} setListBuyCar={setListBuyCar}/>
                                    ))
                                    :
                                    <p>No se encontraron coincidencias...</p>
                                )
                        }
                    </div>
                </div>
            </Row>
        </>
    )
}
