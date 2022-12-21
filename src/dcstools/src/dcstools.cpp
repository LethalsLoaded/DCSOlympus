#include "dcstools.h"

void LogInfo(lua_State* L, string message)
{
    STACK_INIT;

    lua_getglobal(L, "log");
    lua_getfield(L, -1, "INFO");
    int infoLevel = (int)lua_tointeger(L, -1);
    STACK_POP(1);

    STACK_CLEAN;

    Log(L, message, infoLevel);
}

void LogWarning(lua_State* L, string message)
{
    STACK_INIT;

    lua_getglobal(L, "log");
    lua_getfield(L, -1, "WARNING");
    int warningLevel = (int)lua_tointeger(L, -1);
    STACK_POP(1);

    STACK_CLEAN;

    Log(L, message, warningLevel);
}

void LogError(lua_State* L, string message)
{
    STACK_INIT;

    lua_getglobal(L, "log");
    lua_getfield(L, -1, "ERROR");
    int errorLevel = (int)lua_tointeger(L, -1);
    STACK_POP(1);

    STACK_CLEAN;

    Log(L, message, errorLevel);
}

void Log(lua_State* L, string message, int level)
{
    STACK_INIT;

    lua_getglobal(L, "log");
    lua_getfield(L, -1, "write");
    lua_pushstring(L, "Olympus.dll");
    lua_pushnumber(L, level);
    lua_pushstring(L, message.c_str());
    lua_pcall(L, 3, 0, 0);

    STACK_CLEAN;
}

map<int, json::value> getAllUnits(lua_State* L)
{
    int res = 0;
    map<int, json::value>  units;

    STACK_INIT;

    lua_getglobal(L, "Export");
    lua_getfield(L, -1, "LoGetWorldObjects");
    res = lua_pcall(L, 0, 1, 0);

    if (res != 0)
    {
        LogError(L, "Error retrieving World Objects");
        goto exit;
    }

    if (!lua_istable(L, 2))
    {
        LogError(L, "Error retrieving World Objects");
        goto exit;
    }
    else
    {
        lua_pushnil(L);
        while (lua_next(L, 2) != 0)
        {
            int ID = lua_tonumber(L, -2);
            units[ID] = luaTableToJSON(L, -1);
            STACK_POP(1)
        }
    }

exit:
    STACK_CLEAN;
    return units;
}