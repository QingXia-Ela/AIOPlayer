import { search as _search } from "monster-siren-api/dist/api";
import request from "@/utils/request";

export const search = async ({ keyword }: { keyword: string }) => await _search({ request, keyword })
