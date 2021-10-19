import React from 'react';
import { Avatar } from 'antd';
import "./style.css";

const Feedbacks = ({ feedbacks }) => {
    return (
        <section className="feedbacks">
            <div className="feedbacks-wrap container">
                <h2 className="feedbacks-header">Client Testimonials</h2>
                <div className="feedbacks-cards">
                    {feedbacks.map(item => (
                        <div className='card'>
                            <Avatar size={70} src={item.avatar}/>
                            <p className="feedback-text">{item.text}</p>
                            <div className="feedback-author">
                                <h4 className="author-name">{item.name}</h4>
                                <span className="author-position">{item.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Feedbacks
