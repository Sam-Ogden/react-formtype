import React, { Component } from 'react'
import { number } from 'prop-types'

import style from './Field.css'
import Field from './Field'
import { withFieldPropsAndFieldTransition,
  commonPropTypes,
  commonDefaultProps } from '../hocs/withFieldPropsAndFieldTransition'

/**
 * A form field the accepts numbers only
 */
class NumberField extends Component {
  static propTypes = {
    ...commonPropTypes,
    min: number,
    max: number,
  }

  static defaultProps = {
    ...commonDefaultProps,
    type: 'number',
    min: Number.MIN_VALUE,
    max: Number.MAX_VALUE,
  }

  /**
   * Function to call when the user updates the value
   */
  onChange = ( { target: { value } } ) => {
    const { inputChange } = this.props
    inputChange( value )
  }

  render() {
    const { name,
      title,
      refProp,
      type,
      required,
      description,
      placeholder,
      min,
      max,
      next,
      err } = this.props

    return (
      <Field title={title} description={description} next={next} err={err}>
        <input
          className={style.input}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={this.onChange}
          onKeyPress={( { key } ) => ( key === 'Enter' ? next() : null )}
          ref={refProp}
          required={required}
          min={min}
          max={max}
        />
      </Field>
    )
  }
}

export default withFieldPropsAndFieldTransition( NumberField )
