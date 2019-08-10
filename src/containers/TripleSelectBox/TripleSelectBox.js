import React, { useReducer, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

import SelectBox from '../../components/SelectBox';
import SelectBoxControl from '../../components/SelectBoxControl';
import { ACTIONS, reducer, initializer } from '../../state'
import './TripleSelectBox.css'

const TripleSelectBox = props => {

    const [ state, dispatch ] = useReducer(reducer, props, initializer)

    const setLeftValuesSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_LEFT_VALUES, valuesToSelect })
    const setCenterValuesSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_CENTER_VALUES, valuesToSelect })
    const setRightValuesSelection = valuesToSelect => dispatch({ type: ACTIONS.SELECT_RIGHT_VALUES, valuesToSelect })

    const onChange = ACTION_ID => () => { dispatch({ type: ACTION_ID }) }

    const leftToCenter = onChange(ACTIONS.LEFT_TO_CENTER)
    const centerToLeft = onChange(ACTIONS.CENTER_TO_LEFT)
    const rightToCenter = onChange(ACTIONS.RIGTH_TO_CENTER)
    const centerToRight = onChange(ACTIONS.CENTER_TO_RIGHT)

    const isInitialMount = useRef(true)

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }
        props.onChange(state.values)
    }, [ state.values ])

	return (
		<section style={props.styles?.container} className="container">
            <SelectBox
                title={props.titles?.left}
                numberOfLines={props.numberOfLines?.left}
                styles={props.styles?.box}
                onSelect={setLeftValuesSelection}
                values={state.values.left}
            />
            <SelectBoxControl
                styles={props.styles?.boxController}
                sendToLeft={centerToLeft}
                sendToLeftDisabled={state.selections.center.length === 0}
                sendToRight={leftToCenter}
                sendToRightDisabled={state.selections.left.length === 0}
            />
            <SelectBox
                title={props.titles?.center}
                numberOfLines={props.numberOfLines?.center}
                styles={props.styles?.box}
                onSelect={setCenterValuesSelection}
                values={state.values.center}
            />
            <SelectBoxControl
                styles={props.styles?.boxController}
                sendToLeft={rightToCenter}
                sendToLeftDisabled={state.selections.right.length === 0}
                sendToRight={centerToRight}
                sendToRightDisabled={state.selections.center.length === 0}
            />
            <SelectBox
                title={props.titles?.right}
                numberOfLines={props.numberOfLines?.right}
                styles={props.styles?.box}
                onSelect={setRightValuesSelection}
                values={state.values.right}
            />
		</section>
	)
}

TripleSelectBox.propTypes = {
    initialValues: PropTypes.shape({
        left: PropTypes.array.isRequired,
        center: PropTypes.array.isRequired,
        right: PropTypes.array.isRequired
    }).isRequired,
    initialSelections: PropTypes.shape({
        left: PropTypes.array.isRequired,
        center: PropTypes.array.isRequired,
        right: PropTypes.array.isRequired
    }),
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