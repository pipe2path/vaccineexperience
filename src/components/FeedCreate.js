import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class FeedCreate extends React.Component {
    
    renderError({ error, touched }){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }   

    renderInput = ({input, label, meta}) => {
        const className = `field $(meta.error && meta.touched ? 'error': '')`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );    
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createPost(formValues);
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <div class="field">
                        <label>Enter Name</label>
                        <Field name="name" component={this.renderInput} />
                    </div>
                    <div class="field">
                        <label>Enter City</label>
                        <Field name="city" component={this.renderInput} />
                    </div>
                    <div class="field">
                        <label>Enter Comments</label>
                        <div>
                            <Field name="comments" component="textarea" /> 
                        </div>
                    </div>
                    <button className="ui button primary">Submit</button>
                </form>                
            </div>    
        )
    }    
};

const validate = (formValues) => {
    const errors = {};
    
    if (!formValues.name){
        errors.name = "You must enter Name";
    }

    if (!formValues.city){
        errors.city = "You must enter City";
    }

    if (!formValues.comments){
        errors.comments = "You must enter Comments";
    }

    return errors;
}

const formWrapped = reduxForm({ 
    form: 'feedCreate',
    validate: validate
    })(FeedCreate);

export default connect(null, {createPost}) (formWrapped)   