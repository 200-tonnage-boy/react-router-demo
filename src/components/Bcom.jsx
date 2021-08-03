const Bcom = (props) => {
  console.log("组件B", props);
  return (
    <>
      组件B
      <div
        onClick={() =>
          props.history.push({
            pathname: "/a",
            state: { name: "B页面传递state" },
          })
        }
      >
        跳转到B
      </div>
      <div onClick={() => props.history.goBack()}>B页面go-1</div>
    </>
  );
};
export default Bcom;
