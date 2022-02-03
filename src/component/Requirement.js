import React from 'react';
import { useState } from 'react';
import "./Requirement.css"

export default function Requirement() {

    const [page, setPage] = useState(1);

    function goNextpage() {
        if (page === 5) return;
        setPage(page => page + 1);
    }

    function goPreviousPage() {
        setPage(page => page - 1);
    }
   

    return (
        <>
            <div className='Requirement'>

                <div>
                    {page === 1 && <OnboardingOne />}
                    {page === 2 && <OnboardingTwo />}
                    {page === 3 && <OnboardingThree />}
                    {page === 4 && <OnboardingFour />}
                    {page === 5 && <OnboardingFive />}
                </div>

                {page !== 1 && <button className='btn btn-secondary btn-sm' onClick={goPreviousPage}> Previous</button>}
                {page !== 5 && <button className='btn btn-primary btn-sm' onClick={goNextpage}> Next </button>}
                {page === 5 && <button className='btn btn-success' type="submit"> submit </button>}
            </div>
        </>
    );
}

function OnboardingOne() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container1'>What kind of space will guests have?</div>
                <div className='container1a'>
                    <button className='btn1 btn-outline-primary btn-block' type='submit'>An Entire place</button>
                    <button className='btn2 btn-outline-primary btn-block' type='submit'>A private Room</button>
                    <button className='btn3 btn-outline-primary btn-block' type='submit'>A Shared Room</button>
                </div>
            </div>
        </>
    );
}

function OnboardingTwo() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container2'><p className='font'>Can you be specific about the place?</p></div>
                <div className='container2a'>
                    <input type="text" placeholder='Flat number' />
                    <input type="text" placeholder='Street' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
            </div>
        </>
    );
}

function OnboardingThree() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container3'>Can you share the picture of the place?</div>
                <div className='container3a'>
                    <button className='btn btn-primary' htmlFor="image_input" >ADD IMAGE</button>
                    <input type="file" id="image_input" accept="image/png, image/jpg"   />
                </div>
            </div>
        </>
    );
}

function OnboardingFour() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container4'>Are there any kind of restriction in your space?</div>
                <div className='container4a'>
                    <label htmlFor="textarea">Please write your requirements</label>
                    <textarea name="text" id="textarea" cols="30" rows="10"></textarea>
                </div>
            </div>
        </>
    );
}

function OnboardingFive() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container5'>Please validate details before we post the requirement</div>
                <div className='container5a'>
                    <h3>Please check your details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat, facilis placeat qui inventore assumenda aperiam cum consectetur ratione sed libero sequi impedit voluptatum ullam natus provident unde maiores. Quam.</p>
                </div>
            </div>
        </>
    );
}