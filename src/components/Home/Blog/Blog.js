import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import BlogDetail from './BlogDetail';
import './Blog.css';

const blogData = [
    {
        title: 'Overcome Stress and Anxiety with Therapy',
        description: 'Discover effective ways to manage stress and anxiety in your life through therapy sessions. Find professional therapists who can help you develop coping strategies and improve your mental well-being.',
        author: 'Dr. Cudi',
        authorImg: ema,
        date: '1 May 2023'
    },
    {
        title: 'The Power of Emotional Support',
        description: 'Learn about the importance of emotional support in difficult times and how it can positively impact your mental health. Find compassionate therapists who provide emotional support to help you navigate life\'s challenges.',
        author: 'Dr. Sinthia',
        authorImg: watson,
        date: '5 May 2023'
    },
    {
        title: 'Building Healthy Relationships with Couples Therapy',
        description: 'Discover the benefits of couples therapy in strengthening and improving your relationship. Find experienced therapists who specialize in couples counseling to help you and your partner build a healthy and fulfilling relationship.',
        author: 'Dr. Cudi',
        authorImg: john,
        date: '28 April 2023'
    },
]



const Blog = () => {
    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;