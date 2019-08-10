import React, { useReducer, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types'

import './TripleSelectBox.css'
import SelectBox from '../../components/SelectBox';
import SelectBoxControl from '../../components/SelectBoxControl';
import { ACTIONS, reducer, initializer } from '../../state'
import { getOptions } from '../../selectors'
import { useUpdate } from './useUpdate'


const TripleSelectBox = props => {

    const [ state, dispatch ] = useReducer(reducer, props, initializer)

    const setLeftOptionsSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_LEFT_VALUES, valuesToSelect })
    const setCenterOptionsSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_CENTER_VALUES, valuesToSelect })
    const setRightOptionsSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_RIGHT_VALUES, valuesToSelect })

    const onChange = ACTION_ID => () => {  dispatch({ type: ACTION_ID }) }

    const leftToCenter = onChange(ACTIONS.LEFT_TO_CENTER)
    const centerToLeft = onChange(ACTIONS.CENTER_TO_LEFT)
    const rightToCenter = onChange(ACTIONS.RIGTH_TO_CENTER)
    const centerToRight = onChange(ACTIONS.CENTER_TO_RIGHT)

    useUpdate({
        deps: [ getOptions(state.options) ],
        onUpdate: () => props.onChange(getOptions(state.options))
    })

	return (
		<section style={props.styles?.container} className="container">
            <SelectBox
                title={props.titles?.left}
                numberOfLines={props.numberOfLines?.left}
                styles={props.styles?.box}
                onSelect={setLeftOptionsSelection}
                options={state.options.left}
            />
            <SelectBoxControl
                styles={props.styles?.boxController}
                sendToLeft={centerToLeft}
                sendToLeftDisabled={state.options.center.every(({ selected }) => !selected)}
                sendToRight={leftToCenter}
                sendToRightDisabled={state.options.left.every(({ selected }) => !selected)}
            />
            <SelectBox
                title={props.titles?.center}
                numberOfLines={props.numberOfLines?.center}
                styles={props.styles?.box}
                onSelect={setCenterOptionsSelection}
                options={state.options.center}
            />
            <SelectBoxControl
                styles={props.styles?.boxController}
                sendToLeft={rightToCenter}
                sendToLeftDisabled={state.options.right.every(({ selected }) => !selected)}
                sendToRight={centerToRight}
                sendToRightDisabled={state.options.center.every(({ selected }) => !selected)}
            />
            <SelectBox
                title={props.titles?.right}
                numberOfLines={props.numberOfLines?.right}
                styles={props.styles?.box}
                onSelect={setRightOptionsSelection}
                options={state.options.right}
            />
		</section>
	)
}

const Option = PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
    label: PropTypes.string,
    selected: PropTypes.bool
})

TripleSelectBox.propTypes = {
    options: PropTypes.shape({
        left: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.number, PropTypes.string, Option ])),
        center: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.number, PropTypes.string, Option ])),
        right: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.number, PropTypes.string, Option ]))
    }).isRequired,
    titles: PropTypes.shape({
        left: PropTypes.string,
        center: PropTypes.string,
	    right: PropTypes.string,
    }),
    numberOfLines: PropTypes.shape({
        left:	PropTypes.number,
        center: PropTypes.number,
	    right: PropTypes.number,
    }),
    styles: PropTypes.shape({
        container: PropTypes.object,
        box: PropTypes.shape({
            label: PropTypes.object,
            container: PropTypes.object,
            select: PropTypes.object,
            selectOption: PropTypes.object
        }),
        boxController: PropTypes.shape({
            container: PropTypes.object,
            button: PropTypes.object
        })
    }),
    onChange: PropTypes.func.isRequired
}

export default TripleSelectBox