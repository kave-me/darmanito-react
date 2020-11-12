import React, {useState} from 'react';

const FaqQuestion = (props) => {
    const [questionStat, setQuestionStat] = useState({isActive: false});
    const switchQuestionStat = () => {
        setQuestionStat({isActive: !questionStat.isActive})
    }

    return(
        <div key={props.id} className="FaqQuestionContainer" onClick={switchQuestionStat}>
            <div className="FaqQuestionContainer__question">
                {questionStat.isActive
                    ? <i className="fa fa-minus FaqQuestionContainer__question__minesIcon"></i>
                    : <i className="fa fa-plus FaqQuestionContainer__question__plusIcon"></i>
                }
                <p className="FaqQuestionContainer__question__text">{props.question}</p>
            </div>
            <div className="FaqQuestionContainer__answer">
                {questionStat.isActive
                    ? <p className="FaqQuestionContainer__answer__text p2">{props.answer}</p>
                    : null
                }
            </div>
            <div className="FaqQuestionContainer__line"></div>
        </div>
    );
}

export default FaqQuestion;