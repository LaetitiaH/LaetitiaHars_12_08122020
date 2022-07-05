import { useAxios } from "../hooks";

/**
 * API calls services
 *
 *
 * @return {object} (API response)
 * @author Laetitia Hars
 * @version 1.0
 * @param  {Number} userId User identifier
 */

export const useUserInformation = (userId) => useAxios(`/${userId}`);

export const useUserActivityInformation = (userId) =>
  useAxios(`/${userId.toString()}/activity`);

export const useUserSessionsInformation = (userId) =>
  useAxios(`/${userId.toString()}/average-sessions`);

export const useUserPerformance = (userId) =>
  useAxios(`/${userId.toString()}/performance`);
