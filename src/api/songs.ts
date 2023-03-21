import { songs as _songs } from "monster-siren-api/dist/api";
import request from "@/utils/request";

export const songs = async () => _songs({ request })
