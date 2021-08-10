import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const FileDetail = (props) => {
    console.log(" detail rerendered")
    return (
        <p>
            {props.fileDetail.url ? `${props.fileDetail.name} image selected.`: ''}
        </p>
    )
}

const mapStateToProps = state => {
    return {
        fileDetail: state.previewFile.fileDetail || {}
    };
};

// const mapDispatchToProps = () => {
//     return {
//         action: bindActionCreators(actionToPerform)
//     }
// }

export default connect(mapStateToProps, null)(FileDetail);
