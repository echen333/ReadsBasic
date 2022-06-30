import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../actions/article'
import { likeArticle } from '../actions/profile'
import store from '../store'

import { BiHeart, BiCheck } from 'react-icons/bi'

function Articles ( {article, getArticle} ) {
    useEffect( () => {
        // store.dispatch(getArticle(2));
        getArticle(2);
    //   },[])
      },[getArticle])

    return (
        <div className="w-3/5 p-3 mx-auto my-0.5 flex justify-center flex-col">
            <div className="font-bold text-4xl">
                Inbox
            </div>
            {article.map( (x,ind) => {
                return <ArticleCard  key={ind} article={x}/>
            })}
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
                {/* <p className="flex" dangerouslySetInnerHTML={{ __html: article.text.slice(0,150) }} /> */}
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

Articles.propTypes = {
    // article: PropTypes.object.isRequired,
    article: PropTypes.array.isRequired,
    getArticle: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
    article: state.article.articles
});

export default connect(mapStateToProps, {getArticle} )(Articles);