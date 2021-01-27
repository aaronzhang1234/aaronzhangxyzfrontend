const dev={
    backend_url:"http://localhost:5000/"
}
const prod={
    backend_url:"https://aaronzhang.xyz:4000/"
}

const config = process.env.REACT_APP_STAGE==="prod"
    ?prod:dev;

export default{
    config
}