import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Button(props) {
  const {
    title,
    buttonTextStyle,
    ...rest
  } = props

  return (
    <TouchableOpacity
      {...rest}
    >
        <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = Button.defaultProps || {};

Button.propTypes = {
  title: PropTypes.any.isRequired,
}

const styles = StyleSheet.create({
  button: {

  },
})