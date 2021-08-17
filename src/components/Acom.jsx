import {useLocation} from 'react-router'
const Acom = (props) => {
  console.log("组件A", props, useLocation());
  // ('/b',{name:'xxx'})
  // {pathname:'/b',state:{name:'xxx'}}
  return (
    <>
      组件A
      <div
        onClick={() =>
          props.history.push({pathname:'/b',state:{name:'xxx'}})
        }
      >
        跳转到B
      </div>
      <div onClick={() => props.history.goBack()}>A页面go-1</div>
    </>
  );
};
export default Acom;
