import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';

function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        // Prevent browser from reloading
        event.preventDefault();

        const enteredTitle = titleInputRef.current.valueOf();
        const enteredImage = imageInputRef.current.valueOf();
        const enteredAddress = addressInputRef.current.valueOf();
        const enteredDescription = descriptionInputRef.current.valueOf();

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        //console.log(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id='description' required rows='4' ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>

    );

}

export default NewMeetupForm;
