import { connect, ConnectedProps } from 'react-redux'

import { InitialStateType } from '../../store/reducers'
import { CitiesType } from '../../types/types'

const mapStateToProps = (
    state: InitialStateType
): {
    cities: CitiesType
} => {
    return {
        cities: state.cities,
    }
}

export type ConnectPropsType = ConnectedProps<typeof connectCustomSelect>
export const connectCustomSelect = connect(mapStateToProps)
