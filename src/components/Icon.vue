<template>
  <component :is="iconCom"></component>
</template>
<script setup>
  import SimpleIconsInsta360 from '~icons/simple-icons/insta360'
  import WpfPanorama from '~icons/wpf/panorama'
  import SolarPlaybackSpeedBold from '~icons/solar/playback-speed-bold'
  import UisRefresh from '~icons/uis/refresh'
  import LucideRotate3d from '~icons/lucide/rotate-3d'
  import MdiTagAdd from '~icons/mdi/tag-add'
  import MdiGear from '~icons/mdi/gear'
  import ClaritySwitchLine from '~icons/clarity/switch-line'
  import RiAlarmWarningFill from '~icons/ri/alarm-warning-fill'
  import AkarIconsReduce from '~icons/akar-icons/reduce'
  import AkarIconsFullScreen from '~icons/akar-icons/full-screen'
  import GrommetIconsPowerShutdown from '~icons/grommet-icons/power-shutdown'
  import CarbonTagGroup from '~icons/carbon/tag-group'
  import MingcuteDelete2Fill from '~icons/mingcute/delete-2-fill'
  import IconamoonStarLight from '~icons/iconamoon/star-light'
  import IconamoonStarFill from '~icons/iconamoon/star-fill'
  import AntDesignTagOutlined from '~icons/ant-design/tag-outlined'
  import IconoirScreenshot from '~icons/iconoir/screenshot'
  import UilVideo from '~icons/uil/video'
  import MdiVideo3d from '~icons/mdi/video-3d'
  import EpSetUp from '~icons/ep/set-up'
  import FadArmrecording from '~icons/fad/armrecording'
  import IconamoonScreenFull from '~icons/iconamoon/screen-full'
  import IconParkOutlineOffScreen from '~icons/icon-park-outline/off-screen'
  import PhStarBold from '~icons/ph/star-bold'
  import PhArrowUpDuotone from '~icons/ph/arrow-up-duotone'
  import RiArrowRightSLine from '~icons/ri/arrow-right-s-line'
  import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line'
  import GisPedestrian from '~icons/gis/pedestrian'
  import IconParkOutlineFaceRecognition from '~icons/icon-park-outline/face-recognition'
  import MingcuteRightFill from '~icons/mingcute/right-fill'
  import MingcuteLeftFill from '~icons/mingcute/left-fill'
  import TeenyiconsUpSolid from '~icons/teenyicons/up-solid'
  import SimpleLineIconsMagnifierAdd from '~icons/simple-line-icons/magnifier-add'
  import SimpleLineIconsMagnifierRemove from '~icons/simple-line-icons/magnifier-remove'
  import FluentScreenshot20Regular from '~icons/fluent/screenshot-20-regular'
  import EpCloseBold from '~icons/ep/close-bold'
  import GrommetIconsClearOption from '~icons/grommet-icons/clear-option'
  import MaterialSymbolsLightSwitchOutlineSharp from '~icons/material-symbols-light/switch-outline-sharp'
  import EosIconsBubbleLoading from '~icons/eos-icons/bubble-loading'
  import MdiTransitDetour from '~icons/mdi/transit-detour'
  import AntDesignAlertOutlined from '~icons/ant-design/alert-outlined'
  import MaterialSymbolsFrameSourceSharp from '~icons/material-symbols/frame-source-sharp'
  import FluentCursorClick24Regular from '~icons/fluent/cursor-click-24-regular'
  import IcOutlineMenuOpen from '~icons/ic/outline-menu-open'
  import MdiMenuClose from '~icons/mdi/menu-close'
  import MaterialSymbolsPip from '~icons/material-symbols/pip'
  import TablerDeviceCctv from '~icons/tabler/device-cctv'
  import PhMagnifyingGlassPlusBold from '~icons/ph/magnifying-glass-plus-bold'
  import FluentToolbox20Regular from '~icons/fluent/toolbox-20-regular'
  import MaterialSymbolsLightLanguage from '~icons/material-symbols-light/language'

  const props = defineProps({
    icon: {
      type: String
    }
  })

  const iconCom = shallowRef(null)

  const init = () => {
    switch (props.icon) {
      case 'wpf:panorama':
        iconCom.value = WpfPanorama
        break
      case 'simple-icons:insta360':
        iconCom.value = SimpleIconsInsta360
        break
      case 'solar:playback-speed-bold':
        iconCom.value = SolarPlaybackSpeedBold
        break
      case 'uil:refresh':
        iconCom.value = UisRefresh
        break
      case 'lucide:rotate-3d':
        iconCom.value = LucideRotate3d
        break
      case 'mdi:tag-add':
        iconCom.value = MdiTagAdd
        break
      case 'pepicons-pop:gear':
        iconCom.value = MdiGear
        break
      case 'clarity:switch-line':
        iconCom.value = ClaritySwitchLine
        break
      case 'ri:alarm-warning-fill':
        iconCom.value = RiAlarmWarningFill
        break
      case 'akar-icons:reduce':
        iconCom.value = AkarIconsReduce
        break
      case 'akar-icons:full-screen':
        iconCom.value = AkarIconsFullScreen
        break
      case 'grommet-icons:power-shutdown':
        iconCom.value = GrommetIconsPowerShutdown
        break
      case 'carbon:tag-group':
        iconCom.value = CarbonTagGroup
        break
      case 'mingcute:delete-2-fill':
        iconCom.value = MingcuteDelete2Fill
        break
      case 'iconamoon:star-light':
        iconCom.value = IconamoonStarLight
        break
      case 'iconamoon:star-fill':
        iconCom.value = IconamoonStarFill
        break
      case 'ant-design:tag-outlined':
        iconCom.value = AntDesignTagOutlined
        break
      case 'iconoir:screenshot':
        iconCom.value = IconoirScreenshot
        break
      case 'uil:video':
        iconCom.value = UilVideo
        break
      case 'mdi:video-3d':
        iconCom.value = MdiVideo3d
        break
      case 'ep:set-up':
        iconCom.value = EpSetUp
        break
      case 'fad:armrecording':
        iconCom.value = FadArmrecording
        break
      case 'icon-park-outline:off-screen':
        iconCom.value = IconParkOutlineOffScreen
        break
      case 'iconamoon:screen-full':
        iconCom.value = IconamoonScreenFull
        break
      case 'solar:star-bold':
        iconCom.value = PhStarBold
        break
      case 'ph:arrow-up-duotone':
        iconCom.value = PhArrowUpDuotone
        break
      case 'ri:arrow-left-s-line':
        iconCom.value = RiArrowLeftSLine
        break
      case 'ri:arrow-right-s-line':
        iconCom.value = RiArrowRightSLine
        break
      case 'gis:pedestrian':
        iconCom.value = GisPedestrian
        break
      case 'icon-park-outline:face-recognition':
        iconCom.value = IconParkOutlineFaceRecognition
        break
      case 'mingcute:right-fill':
        iconCom.value = MingcuteRightFill
        break
      case 'mingcute:left-fill':
        iconCom.value = MingcuteLeftFill
        break
      case 'teenyicons:up-solid':
        iconCom.value = TeenyiconsUpSolid
        break
      case 'simple-line-icons:magnifier-add':
        iconCom.value = SimpleLineIconsMagnifierAdd
        break
      case 'simple-line-icons:magnifier-remove':
        iconCom.value = SimpleLineIconsMagnifierRemove
        break
      case 'fluent:screenshot-20-regular':
        iconCom.value = FluentScreenshot20Regular
        break
      case 'ep:close-bold':
        iconCom.value = EpCloseBold
        break
      case 'grommet-icons:clear-option':
        iconCom.value = GrommetIconsClearOption
        break
      case 'material-symbols-light:switch-outline-sharp':
        iconCom.value = MaterialSymbolsLightSwitchOutlineSharp
        break
      case 'loading':
        iconCom.value = EosIconsBubbleLoading
        break
      case 'mdi:transit-detour':
        iconCom.value = MdiTransitDetour
        break
      case 'ant-design:alert-outlined':
        iconCom.value = AntDesignAlertOutlined
        break
      case 'material-symbols-light:frame-source-sharp':
        iconCom.value = MaterialSymbolsFrameSourceSharp
        break
      case 'fluent:cursor-click-24-regular':
        iconCom.value = FluentCursorClick24Regular
        break
      case 'ic:outline-menu-open':
        iconCom.value = IcOutlineMenuOpen
        break
      case 'mdi:menu-close':
        iconCom.value = MdiMenuClose
        break
      case 'material-symbols:pip':
        iconCom.value = MaterialSymbolsPip
        break
      case 'tabler:device-cctv':
        iconCom.value = TablerDeviceCctv
        break
      case 'ph:magnifying-glass-plus-bold':
        iconCom.value = PhMagnifyingGlassPlusBold
        break
      case 'ph:toolbox':
        iconCom.value = FluentToolbox20Regular
        break
      case 'language':
        iconCom.value = MaterialSymbolsLightLanguage
        break
      default:
        console.error(`${props.icon}需要到 src/components/Icon.vue 中配置改图标`)
        break
    }
  }

  watch(
    () => props.icon,
    () => init()
  )

  onMounted(() => {
    init()
  })
</script>
