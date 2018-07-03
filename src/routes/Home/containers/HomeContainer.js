import Home from '../components/Home'
import {connect} from 'react-redux'

export default connect(state => ({company: state.app.carrier}),)(Home)