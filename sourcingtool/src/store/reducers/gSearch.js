import gSearch from "../../apis/gSearch"

export const searchSubmitHandler = async term => {

  const response = await gSearch.get(null, {
    params: {
      q: term
    }
  }
  )
}