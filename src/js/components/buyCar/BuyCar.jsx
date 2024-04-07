import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { dialogConfig } from '../../utils/DialogConfig';
import { useBuyCarForm } from '../../hooks/BuyCar/useBuyCarForm';

export const BuyCar = ({listBuyCar,setListBuyCar}) => {

    const {showDialog,
        setShowDialog,
        handleHeader,} = useBuyCarForm(null); 
    
    const handleDeleteListBuyCar = (id) => {
        setListBuyCar(prevList => prevList.filter(item => item.id !== id));
    }
        
    return(
        <>
            {
                <Button
                className='rounded-circle bg-none border-0 p-10 mx-10'
                onClick={() => setShowDialog(true)}
                >
                    Mostrar juegos en el carrito
                </Button>
            }
            
            <Dialog
                visible={showDialog}
                style={{ width: '50vw' }}
                pt={dialogConfig}
                onHide={() => setShowDialog(false)}
                closable={false}
                header={() => handleHeader() }
                draggable={false}
            >
                <div>
                    {
                        (listBuyCar.length>0) ?
                            Array.isArray(listBuyCar) && listBuyCar.map((game,index) =>(
                                <div key={index} style={{display:'flex', justifyContent:'space-between'}}>
                                    <p style={{marginRight:'10px'}}>{index+1}</p>
                                    <p>{game.game.nombre}</p>
                                    <button onClick={()=>handleDeleteListBuyCar(game.id)}>Eliminar</button>
                                </div>
                            ))
                        :
                        <p>No se han agregado juegos al carrito.</p>
                    }
                </div>
            
            </Dialog>
        </>
    )
}