import { getDB } from '../../db'
import {
  createLyricQueryStatement,
  createRawLyricQueryStatement,
  createRawLyricInsertStatement,
  createRawLyricDeleteStatement,
  createRawLyricUpdateStatement,
  createRawLyricClearStatement,
  createEditedLyricQueryStatement,
  createEditedLyricInsertStatement,
  createEditedLyricDeleteStatement,
  createEditedLyricUpdateStatement,
  createEditedLyricClearStatement,
  createEditedLyricCountStatement,
  createRawLyricCountStatement,
} from './statements'

/**
 * 查询原始歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
export const queryLyric = (id: string): LX.DBService.Lyricnfo[] => {
  const lyricQueryStatement = createLyricQueryStatement()
  return lyricQueryStatement.all(id)
}

/**
 * 查询原始歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
export const queryRawLyric = (id: string): LX.DBService.Lyricnfo[] => {
  const rawLyricQueryStatement = createRawLyricQueryStatement()
  return rawLyricQueryStatement.all(id)
}

/**
 * 批量插入原始歌词
 * @param lyrics 列表
 */
export const inertRawLyric = (lyrics: LX.DBService.Lyricnfo[]) => {
  const db = getDB()
  const rawLyricInsertStatement = createRawLyricInsertStatement()
  db.transaction((lyrics: LX.DBService.Lyricnfo[]) => {
    for (const lyric of lyrics) rawLyricInsertStatement.run(lyric)
  })(lyrics)
}

/**
 * 批量删除原始歌词
 * @param ids 列表
 */
export const deleteRawLyric = (ids: string[]) => {
  const db = getDB()
  const rawLyricDeleteStatement = createRawLyricDeleteStatement()
  db.transaction((ids: string[]) => {
    for (const id of ids) rawLyricDeleteStatement.run(id)
  })(ids)
}

/**
 * 批量更新原始歌词
 * @param lyrics 列表
 */
export const updateRawLyric = (lyrics: LX.DBService.Lyricnfo[]) => {
  const db = getDB()
  const rawLyricUpdateStatement = createRawLyricUpdateStatement()
  db.transaction((lyrics: LX.DBService.Lyricnfo[]) => {
    for (const lyric of lyrics) rawLyricUpdateStatement.run(lyric)
  })(lyrics)
}

/**
 * 清空原始歌词
 */
export const clearRawLyric = () => {
  const rawLyricClearStatement = createRawLyricClearStatement()
  rawLyricClearStatement.run()
}

/**
 * 统计已编辑歌词数量
 */
export const countRawLyric = () => {
  const countStatement = createRawLyricCountStatement()
  return countStatement.get().count
}


/**
 * 查询已编辑歌词
 * @param id 歌曲id
 * @returns 歌词信息
 */
export const queryEditedLyric = (id: string): LX.DBService.Lyricnfo[] => {
  const rawLyricQueryStatement = createEditedLyricQueryStatement()
  return rawLyricQueryStatement.all(id)
}

/**
 * 批量插入已编辑歌词
 * @param lyrics 列表
 */
export const inertEditedLyric = (lyrics: LX.DBService.Lyricnfo[]) => {
  const db = getDB()
  const rawLyricInsertStatement = createEditedLyricInsertStatement()
  db.transaction((lyrics: LX.DBService.Lyricnfo[]) => {
    for (const lyric of lyrics) rawLyricInsertStatement.run(lyric)
  })(lyrics)
}

/**
 * 批量删除已编辑歌词
 * @param ids 列表
 */
export const deleteEditedLyric = (ids: string[]) => {
  const db = getDB()
  const rawLyricDeleteStatement = createEditedLyricDeleteStatement()
  db.transaction((ids: string[]) => {
    for (const id of ids) rawLyricDeleteStatement.run(id)
  })(ids)
}

/**
 * 批量更新已编辑歌词
 * @param lyrics 列表
 */
export const updateEditedLyric = (lyrics: LX.DBService.Lyricnfo[]) => {
  const db = getDB()
  const rawLyricUpdateStatement = createEditedLyricUpdateStatement()
  db.transaction((lyrics: LX.DBService.Lyricnfo[]) => {
    for (const lyric of lyrics) rawLyricUpdateStatement.run(lyric)
  })(lyrics)
}

/**
 * 清空已编辑歌词
 */
export const clearEditedLyric = () => {
  const rawLyricClearStatement = createEditedLyricClearStatement()
  rawLyricClearStatement.run()
}


/**
 * 统计已编辑歌词数量
 */
export const countEditedLyric = () => {
  const countStatement = createEditedLyricCountStatement()
  return countStatement.get().count
}
