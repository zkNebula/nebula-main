import { proposals } from "./constants";
import { flattenObject } from "./utils";

export function getProposal(slug: string) {
    const proposal = flattenObject(proposals).filter(proposal => proposal.slug === slug)[0];
        
    return proposal;
}

export async function fetchAllCountries() {
    try {
        const response = await fetch('http://api.geonames.org/countryInfo?username=cyphersloops'); 
        let responseType = await response.text();
        let countries = new window.DOMParser().parseFromString(responseType, "text/xml");
        console.log(countries, "fetched countries");
        return countries;
      } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
      }
}