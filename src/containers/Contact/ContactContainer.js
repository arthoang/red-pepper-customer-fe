import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import Contact from '../../components/Contact/Contact';

//redux
import { connect } from 'react-redux';

class ContactContainer extends Component {

    render() {
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox link="contact"
                    title="CONTACT US"
                    caption="WHERE WE ARE"
                >
                </HeaderBox>

                <Contact> </Contact>


            </React.Fragment>
        );
    }

}


export default (ContactContainer);