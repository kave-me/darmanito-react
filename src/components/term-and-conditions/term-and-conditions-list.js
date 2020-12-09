import React, {useState} from 'react';
import TermAndConditionsIcon from './term-and-conditions-icon'
import shortid from 'shortid';
import {description1, description2, description3, description4} from './term-and-conditions-descriptions.js';


const TermAndConditionsList = () => {
    const [terms, setTerms] = useState([
        {
            title:"قوانین عضویت حساب کاربری",
            description: description1,
            isActive: true,
            id: shortid.generate()
        },
        {
            title:"قوانین داروخانه",
            description: description2,
            isActive: false,
            id: shortid.generate()
        },
        {
            title:"قوانین فروشگاه",
            description: description3,
            isActive: false,
            id: shortid.generate()
        },
        {
            title:"قوانین مشاوره آنلاین",
            description: description4,
            isActive: false,
            id: shortid.generate()
        }
    ]);

    const switchTerm = (id) => {
        const newTerms = terms.map((term) => {
                term.id === id
                ? term.isActive = true
                : term.isActive = false;
                return(term);
        });
        setTerms(newTerms);
    }

    return (
        <div className="TermAndConditionsListContainer section">

            <div className="TermAndConditionsList__icon">
            {terms.map((term, index) => {
                return(
                    <div key={index}>
                        <TermAndConditionsIcon
                        title={term.title}
                        active={term.isActive}
                        key={term.id}
                        click={()=> switchTerm(term.id)}/>
                    </div>
                );
            })}
            </div>
            {terms.map((term)=> term.isActive
            ? <p className="TermAndConditionsList__description" key={shortid.generate()} >{term.description}</p>
            : null)}
        </div>
    );
}

export default TermAndConditionsList;