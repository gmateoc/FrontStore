import React from 'react';
import { Row } from 'react-bootstrap';
import { useFetchQuery } from '../../hooks/commons/useFetchQuery';
import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';
import { CardCompanies } from './CardCompanies';
import {CompaniesForm} from './CompaniesForm';

export const Companies = () => {

    const id = useParams();

    const companiesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/companies/all', params: '', token: id.token, queryName: 'companies'});

    const handleReloadCards = () => {
        companiesQuery.refetch();
    }

    return (
        < >
            <Row>
                <Header/>
            </Row>
            <Row>
                <div style={{display:'flex' ,justifyContent:'center', alignItems:'center', marginBottom:'20px'}}>
                    <CompaniesForm handleReloadCards={handleReloadCards} />
                </div>
            </Row>
            <Row>
                <div style={{display:'flex', flexWrap: 'wrap'}}>
                    {
                        Array.isArray(companiesQuery?.data?.data) && companiesQuery?.data?.data.map((company)=>(
                            
                            <div key={company.id} style={{ width: '20%' }}>
                                <CardCompanies company={company} />
                            </div>
                            
                        ))
                    }
                </div>
            </Row>
        </>
    )
}

