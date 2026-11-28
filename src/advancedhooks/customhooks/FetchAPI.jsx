import useFetch from "./useFetch";

export default function FetchAPI(){
    const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

    if(loading){
        return <h4>Loading....</h4>
    }

    if(error){
        return <h4>Error: {error}</h4>
    }

    return(
        <div>
            <h3 className="text-center">Recipes</h3>
            {data.recipes.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <h5>{item.ingredients}</h5>
                    <p>{item.instructions}</p>
                </div>
                
            ))}
        </div>
    );
}