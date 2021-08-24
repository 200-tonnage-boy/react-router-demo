import {withRouter} from 'react-router-dom'

const TestWithRouter = (props) => {
  console.log('cjy-test with router', props)
  return <>tt</>
}
export default withRouter(TestWithRouter)