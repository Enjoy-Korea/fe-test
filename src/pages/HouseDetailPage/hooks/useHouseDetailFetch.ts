import { useEffect, useState } from "react"

import api from "../../../api"
import { HouseType } from "../../../api/house"

function useHouseDetailFetch(houseId: number) {
  const [data, setData] = useState<HouseType>()
  const [error, setError] = useState<unknown>() // TODO: Error Typing
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await api.getHouseDetail(houseId)
        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [houseId])

  return {
    isLoading,
    data,
    error
  }
}

export default useHouseDetailFetch
