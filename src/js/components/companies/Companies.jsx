import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useFetchQuery } from '../../hooks/useFetchQuery';
import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';
import { CardCompanies } from './CardCompanies';

export const Companies = () => {

    const id = useParams();

    const companiesQuery = useFetchQuery({url: 'http://127.0.0.1:8000/api/companies/all', params: '', token: id.token, queryName: 'companies'});

    return (
        < >
            <Row>
                <Header/>
            </Row>
            <Row>
                <div style={{display:'flex'}}>
                    {
                        Array.isArray(companiesQuery?.data?.data) && companiesQuery?.data?.data.map((company)=>(
                            
                            <CardCompanies key={company.id} company={company} />
                            
                        ))
                    }
                </div>
            </Row>
        </>
    )
}

