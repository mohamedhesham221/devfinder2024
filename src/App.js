import DataBody from "./components/body/DataBody";
import Header from "./components/header/Header";
import SearchForm from "./components/search/SearchForm";
import { myContext } from "./context/myContext";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [isDark, setIsDark]= useState(false)
  const {data, error, loading, fetchData} = useFetch()

    return (
      <myContext.Provider value={{
        isDark,
        setIsDark,
        data,
        error,
        loading,
        fetchData}}>
    <div className={`App ${isDark? "dark-mode_app": ""}`}>
        <Header />
        <SearchForm />
        <DataBody />
    </div>
      </myContext.Provider>
  );
}

export default App;
