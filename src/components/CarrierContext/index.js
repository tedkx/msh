import React from 'react'
import DefaultCompanyContext from './Default'

const companies = {
    default: DefaultCompanyContext,
};

const companyContext = React.createContext(companies.default);

export default companyContext;