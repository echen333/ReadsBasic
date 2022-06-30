import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../actions/article'
import { likeArticle } from '../actions/profile'
import store from '../store'

import { BiHeart, BiCheck } from 'react-icons/bi'

function Liked ( {user} ) {

    return (
        <div className="w-3/5 p-3 mx-auto my-0.5 flex justify-center flex-col">
            <div className="font-bold text-4xl">
                Inbox
            </div>
            {user && user.liked.map( (x,ind) => {
                return <ArticleCard  key={ind} article={x}/>
            })}
            {!user && <p>
                HI, not logged in</p>}
        </div>
    )
}

function ArticleCard ( {article} ) {

    const handleClick = () => {
        window.open(article.link);
    };
    const clickLike = () => {
        store.dispatch(likeArticle(article._id));
        console.log(article);
    }
    return (
        <div className="p-3 bg-pink-300 text-center border-r-0
        border-l-0 border-t-2 justify-center mx-auto my-0.5">
            <div className="h-40 
                hover:bg-gray-200 rounded-md
                p-3 cursor-pointer
                " onClick={handleClick} >
                <h1 className="font-bold"> {article.title} </h1>
                <p className="text-gray-600"> {article.text.slice(0,150)} </p>
            </div>
            <div className="bottom-6">
                <button onClick={clickLike}>
                    <BiHeart size="30"/>
                </button>
            </div>
        </div>
        
    )
}

Liked.propTypes = {
    // article: PropTypes.object.isRequired,
    // article: PropTypes.array.isRequired,
    // getArticle: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {getArticle} )(Liked);