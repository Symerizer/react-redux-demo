import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
