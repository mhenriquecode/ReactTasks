function FatherApp(props) {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {props.children}
    </div>
  );
}

export default FatherApp;
