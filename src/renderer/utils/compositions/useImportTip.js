import { useI18n } from '@renderer/plugins/i18n'
import { dialog } from '@renderer/plugins/Dialog'

export default () => {
  const t = useI18n()


  return (type) => {
    let message
    switch (type) {
      case 'defautlList':
      case 'playList':
        message = t('list_import_tip__playlist')
        break
      case 'setting':
        message = t('list_import_tip__setting')
        break
      case 'allData':
        message = t('list_import_tip__alldata')
        break
      case 'playListPart':
      case 'playListPart_v2':
        message = t('list_import_tip__playlist_part')
        break

      default:
        message = t('list_import_tip__unknown')
        break
    }

    dialog({
      message,
      confirmButtonText: t('ok'),
    })
  }
}
