import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import Gallery from '../../components/Gallery/Gallery';

//redux
import { connect } from 'react-redux';

class GalleryContainer extends Component {

    render() {
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox link="gallery"
                    title="GALLERY"
                    caption="CHERISH MOMENTS"
                >
                </HeaderBox>

                <Gallery> </Gallery>


            </React.Fragment>
        );
    }

}


export default (GalleryContainer);