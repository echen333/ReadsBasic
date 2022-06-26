import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../actions/article'
import store from '../store'

function Articles ( {article, getArticle} ) {
    useEffect( () => {
        // store.dispatch(getArticle(2));
        getArticle(2);
      },[])
    //   },[getArticle]) ????? learn diff

    return (
        <div className="">
            <div className="text-center font-bold text-4xl">
            {/* <div className="text-center font-bold text-4xl absolute left-1"> */}
                Inbox
            </div>
            {article.map( x => {
                return <ArticleCard article={x}/>
            })}
        </div>
    )
}

function ArticleCard ( {article} ) {

    const handleClick = () => {
        window.open(article.link);
    };
    return (
        <div className="p-3 w-80 text-center border-r-0
        border-l-0 border-t-2 justify-center mx-auto my-0.5">
            <div className="max-w-4xl h-40 
                hover:bg-gray-200 rounded-md
                p-3 cursor-pointer
                " onClick={handleClick} >
                <h1 className="font-bold"> {article.title} </h1>
                <p className="text-gray-600"> {article.text.slice(0,150)} </p>
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