import React, {Component} from "react";

import './post-list-item.css'

export default class PostListItem extends Component {
    

    render() {
        const {label, onDelete, important, like, onToggleImportant, onToggleLiked} = this.props
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames +=' important';
        }

        if (like) {
            classNames +=' like';
        }
    

        return (
            <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
                
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button"
                className="btn-star btn-sm"
                onClick={onToggleImportant}
                >
                
                    <i className="fa fa-star">S</i>
                </button>
                <button 
                type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}

                >
                
                    <i className="fa fa-trash">T</i>
                </button>
                <i className="fa fa-heart">H</i>
            </div>
        </div>
        )
    }
}

