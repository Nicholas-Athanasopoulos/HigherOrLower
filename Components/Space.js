import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function Space(props) {
    const {
        height,
        width,
    } = props

    return (
        <View style={{ height: height, width: width }} />
    )
}

Space.defaultProps = Space.defaultProps || {};

Space.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}

const styles = StyleSheet.create({
    space: {

    },
})