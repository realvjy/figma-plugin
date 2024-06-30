import { figmaPluginUrl, userAgentToFake } from "@/lib/common";


export const fetchDownloads = async (pluginName: string, pluginId: string) => {
  const params  = {
    "sort_by": "all_time",
    "pagination": "null",
    "editor_type": "all",
    "category": "null",
    "include_tags": "true",
    "tags": pluginName

  }
  const headers = {
    "User-Agent": userAgentToFake
  }
  const params_string = new URLSearchParams(params).toString()
  const response  =  await fetch(figmaPluginUrl + `?${params_string}`, {headers});
  const body = await response.text();
  console.log(body)
};