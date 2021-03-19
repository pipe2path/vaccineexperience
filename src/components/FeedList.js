import React , { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFeed } from '../actions';
import { selectCity } from '../actions';
import ReactTimeAgo from 'react-time-ago';

class FeedList extends Component {
    
    renderDate = (dateCreated) => {
        let date = new Date(dateCreated);
        return date.toString();
    }

    renderCityAndFacility = (city, facility) => {
        return facility ? city + ' - ' + facility : city; 
    }

    renderList= () => {
        return this.props.feeds.map((feed) => {
            return (
                <div className="column">
                    <div className="ui feed" key={feed.userId}> 
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    <a className="user">
                                        {feed.userName}
                                    </a>
                                    <ReactTimeAgo className="right floated date" date={this.renderDate(feed.dateCreated)} locale="en-US" />
                                </div>
                                <div>
                                    {this.renderCityAndFacility(feed.cityName, feed.facility)}
                                </div>
                                <div className="extra text">
                                    {feed.content}
                                </div>
                            </div>
                        </div>   
                        <div className="ui divider"></div>
                    </div>
                </div>
            )
        })
    }

    renderCreate = () => {
        return(
            <div style={{textAlign: 'right'}}>
                <Link to="/feeds/new" className="ui button primary">
                    Create Post
                </Link>
            </div>
        )
    }

    componentDidMount(){
        this.props.fetchFeed(null);
    }

    render() {
        if (!this.props.feeds) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <div>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        );    
    }
}

const mapStateToProps = (state) => {
    return { feeds: state.feeds}
}

export default connect(mapStateToProps, { fetchFeed })(FeedList);