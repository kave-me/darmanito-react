import React from 'react';
import shortid from 'shortid';
import FaqQuestion from './FaqQuestion';


const faqQuestions = [
    {
        question: "آیا درمانیتو برای پیدا کردن دارو هزینه ای دریافت میکند؟",
        answer: "فعلا پاسخی برای این سوال در نظر گرفته نشده.",
        id: 1
    },
    {
        question: "درمانیتو چطور کار میکند؟",
        answer: "فعلا پاسخی برای این سوال در نظر گرفته نشده.",
        id: 2
    },
    {
        question: "آیا درمانیتو در کرج هم فعالیت میکند؟",
        answer: "درمانیتو فعالیت خودش را از شهر تهران شروع کرده و به زودی در کرج هم آغاز به کار میکند.",
        id: 3
    },
    {
        question: "هزینه ی ارسال دارو چقدر است؟",
        answer: "فعلا پاسخی برای این سوال در نظر گرفته نشده.",
        id: 4
    },
];

const FaqQuestionList = () => {
    return(
        <div className="faqQuestionListContainer">
            {faqQuestions.map(q => {
                return(
                    <FaqQuestion
                    question={q.question}
                    answer={q.answer}
                    key={shortid.generate()}/>
                    );
                })}
            </div>
    );
}

export default FaqQuestionList;