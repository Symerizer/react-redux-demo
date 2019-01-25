import { connect } from 'react-redux'
import User from '../components/User'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(User)
