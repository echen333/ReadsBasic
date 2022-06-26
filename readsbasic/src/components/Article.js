import { connect } from 'react-redux'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../actions/article'
import store from '../store'

const Articles = ( {article, getArticle} ) => {
    useEffect( () => {
        // store.dispatch(getArticle(2));
        getArticle(2);
      },[])
    //   },[getArticle]) ????? learn diff

    return (
        <div>
            {article.length}
            {article.map( x => {
                return <div>
                        {x.title}
                    </div>
            })}
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