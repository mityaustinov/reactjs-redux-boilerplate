import React, { Component } from 'react'
// import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { updateUser, apiRequest } from '../actions/userActions'


class App extends Component {
    constructor() {
        super()

        this.state = {
        }

        this.onUpdateUser = this.onUpdateUser.bind(this)
    }

    // componentDidMount() {
    //     this.props.onApiRequest()
    // }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
    }

    render() {
        return (
            <div class="dialogue">
                <div>
                    <p>&ndash; Now... Say my name.</p>
                    <p>&ndash; <input onChange={this.onUpdateUser} value={this.props.user} />?</p>
                    <p>&ndash; You're goddamn right! It's {this.props.user}.</p>
                </div>
            </div>
        )
    }
}


const productsSelector = createSelector(
    state => state.products,
    products => products
)

const userSelector = createSelector(
    state => state.user,
    user => user
)

const mapStateToProps = createSelector(
    // state => state.products,
    // state => state.user,
    productsSelector,
    userSelector,
    (products, user) => ({
        products,
        user
    })
)

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest,
}

// const mapStateToProps = (state, props) => ({
//     products: state.products,
//     user: state.user,
//     userPlusProp: `${state.user} ${props.aRandomProps}`,
// })

// const mapActionsToProps = (dispatch, props) => {
//     console.log(props)
//     return bindActionCreators({
//         onUpdateUser: updateUser,
//     }, dispatch)
// }

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//     console.log(propsFromState, propsFromDispatch, ownProps)
//     return {}
// }

export default connect(mapStateToProps, mapActionsToProps)(App)
// export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App)
