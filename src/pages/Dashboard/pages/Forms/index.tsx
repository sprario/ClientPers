import { format } from 'path';
import React from 'react';
import { 
    Outlet,
    NavLink,
    useSearchParams,
    useLocation,
    Link,
  } from 'react-router-dom';
  //import useQuery from '../../../../hooks/useQuery';

  
  /**
   * useLocation returns something like:
   * {
        pathame: "/invoices",
        search: "?filter=sa",
        hash: "",
        state: null,
        key: "ae4cz2j"
      }
   */
//   function QueryNavLink({ to, ...props}) {
//     let location = useLocation();
//     return <NavLink to={to + location.search} {...props} />;
//   }
  
const Forms = () => {
    const invoices = [{name:'FormA'}, {name:'FormB'}, {name:'FormC'}];
    let [searchParams, setSearchParams] = useSearchParams();

    //const formQuery = useQuery(() => getConcepts(), { staleTime: 60000, cacheTime: 60000 });
  
    const handleChangeSearch = (event: any) => {
      let filter = event.target.value;
      if (filter)
        setSearchParams({ filter });
      else
        setSearchParams({});
    }
  
    return (
      <main className="flex">
        <nav className="bg-silver-400">
          <h2>Formularios</h2>
          <label>Buscar: </label>
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => handleChangeSearch(event)}
          />
          <br/>
          { invoices
            .filter(invoice => {
              const filter = searchParams.get("filter");
              if (!filter) return true;
              const name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map( form => (
                 <div>
                    <Link to={`${form.name}`}>
                        {form.name}
                    </Link>
                </div> 
          ))}
        </nav>
        <div className="App-content">
          <Outlet />
        </div>
      </main>
    )
  };

export default Forms;
