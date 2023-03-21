import { albums as _albums, songs } from "monster-siren-api/dist/api";
import request from "@/utils/request";
import { RequestFunction } from "monster-siren-api/dist/packages/declare/modules";

export const albums = async () => _albums({ request })
