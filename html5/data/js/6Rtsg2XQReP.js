window.globalProvideData('slide', '{"title":"SOAL 7","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":27,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide27","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6Rtsg2XQReP","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5fa7A3Bmiyy.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5itKaDq07GH.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6CDeqwTt2cz.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6fnjDGOIWXm.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6clcTl1heSw"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5k4at42yDM1.InvalidPromptSlide"}}]}]},"ReviewInt_64EWxTguy6S":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fa7A3Bmiyy"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5itKaDq07GH"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6CDeqwTt2cz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6fnjDGOIWXm"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6clcTl1heSw.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64EWxTguy6S_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64EWxTguy6S_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64EWxTguy6S","typea":"var","valueb":"6MrNkdHbEfD","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MrNkdHbEfD.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_64EWxTguy6S"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6MrNkdHbEfD.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_64EWxTguy6S"}]}]}]},"ReviewIntCorrectIncorrect_64EWxTguy6S":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fa7A3Bmiyy"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5itKaDq07GH"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6CDeqwTt2cz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6fnjDGOIWXm"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_64EWxTguy6S":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_64EWxTguy6S"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_64EWxTguy6S":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fa7A3Bmiyy"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5itKaDq07GH"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6CDeqwTt2cz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6fnjDGOIWXm"},"enabled":{"type":"boolean","value":false}}]},"64EWxTguy6S_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6clcTl1heSw.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6MrNkdHbEfD.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_64EWxTguy6S"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6clcTl1heSw.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6clcTl1heSw.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_64EWxTguy6S"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6Rtsg2XQReP":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5igvxqeVLs2"}}]},"NavigationRestrictionPreviousSlide_6Rtsg2XQReP":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5k4at42yDM1","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5k4at42yDM1","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6MrNkdHbEfD_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6MrNkdHbEfD_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6MrNkdHbEfD_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_64EWxTguy6S"}]},{"kind":"showtimer","id":"_player.6MrNkdHbEfD_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_64EWxTguy6S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_64EWxTguy6S"}],"elseActions":[{"kind":"exe_actiongroup","id":"64EWxTguy6S_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_64EWxTguy6S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64EWxTguy6S","typea":"var","valueb":"6MrNkdHbEfD","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MrNkdHbEfD"},"completed_slide_ref":{"type":"string","value":"_player.5WlEhYMX0or.6Kg0PGhd0ol"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_64EWxTguy6S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_64EWxTguy6S","typea":"var","valueb":"6MrNkdHbEfD","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6MrNkdHbEfD"},"completed_slide_ref":{"type":"string","value":"_player.5WlEhYMX0or.6Kg0PGhd0ol"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6Rtsg2XQReP"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6Rtsg2XQReP"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":281,"id":"6TO9opkaRen"},{"kind":"audio","assetId":282,"id":"5lZYkMvf94p"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64LNOBSLXT5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67sdfc3JnGv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6axBBYqaReK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XdlXzpG8Cm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Owb2YGZnxb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fa7A3Bmiyy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5itKaDq07GH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CDeqwTt2cz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fnjDGOIWXm"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":225,"id":"01","url":"story_content/5mPwCMZKrt4_80_DX2560_DY2560.swf","type":"normal","altText":"33.png","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"33.png","pngfb":false,"pr":{"l":"Lib","i":127}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"64LNOBSLXT5"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":231,"id":"01","url":"story_content/6fEX4ZfBe2s_80_P_0_0_12001_3584_DX2560_DY2560.swf","type":"normal","altText":"Image 112.emf","width":2047,"height":611,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-70,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":191,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":382,"altText":"Image 112.emf","pngfb":false,"pr":{"l":"Lib","i":223}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":382,"strokewidth":0}},"width":1280,"height":382,"resume":true,"useHandCursor":true,"id":"67sdfc3JnGv"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":233,"id":"01","url":"story_content/6O7Gsq0v1Ix_80_DX256_DY256.swf","type":"normal","altText":"Image 119.emf","width":256,"height":230,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1152,"yPos":605,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":64,"rotateYPos":57.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":128,"bottom":115,"altText":"Image 119.emf","pngfb":false,"pr":{"l":"Lib","i":225}},"html5data":{"xPos":0,"yPos":0,"width":128,"height":115,"strokewidth":0}},"width":128,"height":115,"resume":true,"useHandCursor":true,"id":"6axBBYqaReK","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5WlEhYMX0or.5igvxqeVLs2"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6TO9opkaRen"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6TO9opkaRen"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":276,"id":"01","url":"story_content/6lTLKWOf2in_80_DX2384_DY2384.swf","type":"normal","altText":"Image 150.emf","width":2047,"height":320,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":44,"yPos":96,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":596,"rotateYPos":100,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1192,"bottom":200,"altText":"Image 150.emf","pngfb":false,"pr":{"l":"Lib","i":241}},"html5data":{"xPos":0,"yPos":0,"width":1192,"height":200,"strokewidth":0}},"width":1192,"height":200,"resume":true,"useHandCursor":true,"id":"6XdlXzpG8Cm"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":241,"id":"01","url":"story_content/5WRTUKPDIUf_80_DX256_DY256.swf","type":"normal","altText":"Image 118.emf","width":256,"height":230,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":605,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":64,"rotateYPos":57.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":128,"bottom":115,"altText":"Image 118.emf","pngfb":false,"pr":{"l":"Lib","i":225}},"html5data":{"xPos":0,"yPos":0,"width":128,"height":115,"strokewidth":0}},"width":128,"height":115,"resume":true,"useHandCursor":true,"id":"6Owb2YGZnxb","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5WlEhYMX0or.60Yb77Ee4iw"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6TO9opkaRen"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6TO9opkaRen"}}]}]},{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":277,"id":"01","url":"story_content/6nYG7DhVi3X_80_DX602_DY602.swf","type":"normal","altText":"Image 198.emf","width":602,"height":476,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":8,"yPos":352,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":150.5,"rotateYPos":119,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":301,"bottom":238,"altText":"Image 198.emf","pngfb":false,"pr":{"l":"Lib","i":242}},"html5data":{"xPos":0,"yPos":0,"width":301,"height":238,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":301,"bottom":238,"altText":"Image 198.emf","pngfb":false,"pr":{"l":"Lib","i":243}},"html5data":{"xPos":0,"yPos":0,"width":301,"height":238,"strokewidth":0}}}],"width":301,"height":238,"resume":true,"useHandCursor":true,"id":"5fa7A3Bmiyy","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5itKaDq07GH.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5itKaDq07GH._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5itKaDq07GH"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6CDeqwTt2cz.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6CDeqwTt2cz._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6CDeqwTt2cz"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6fnjDGOIWXm.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6fnjDGOIWXm._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6fnjDGOIWXm"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":278,"id":"01","url":"story_content/6bpFL2ZAMx7_80_DX616_DY616.swf","type":"normal","altText":"Image 199.emf","width":616,"height":476,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":328,"yPos":352,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":154,"rotateYPos":119,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":308,"bottom":238,"altText":"Image 199.emf","pngfb":false,"pr":{"l":"Lib","i":244}},"html5data":{"xPos":0,"yPos":0,"width":308,"height":238,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":308,"bottom":238,"altText":"Image 199.emf","pngfb":false,"pr":{"l":"Lib","i":245}},"html5data":{"xPos":0,"yPos":0,"width":308,"height":238,"strokewidth":0}}}],"width":308,"height":238,"resume":true,"useHandCursor":true,"id":"5itKaDq07GH","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5fa7A3Bmiyy.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5fa7A3Bmiyy._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5fa7A3Bmiyy"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6CDeqwTt2cz.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6CDeqwTt2cz._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6CDeqwTt2cz"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6fnjDGOIWXm.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6fnjDGOIWXm._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6fnjDGOIWXm"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":279,"id":"01","url":"story_content/6nithIzwZoo_80_DX604_DY604.swf","type":"normal","altText":"Image 200.emf","width":604,"height":476,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":632,"yPos":352,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":151,"rotateYPos":119,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":302,"bottom":238,"altText":"Image 200.emf","pngfb":false,"pr":{"l":"Lib","i":246}},"html5data":{"xPos":0,"yPos":0,"width":302,"height":238,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":302,"bottom":238,"altText":"Image 200.emf","pngfb":false,"pr":{"l":"Lib","i":247}},"html5data":{"xPos":0,"yPos":0,"width":302,"height":238,"strokewidth":0}}}],"width":302,"height":238,"resume":true,"useHandCursor":true,"id":"6CDeqwTt2cz","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5fa7A3Bmiyy.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5fa7A3Bmiyy._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5fa7A3Bmiyy"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5itKaDq07GH.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5itKaDq07GH._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5itKaDq07GH"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6fnjDGOIWXm.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6fnjDGOIWXm._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6fnjDGOIWXm"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":280,"id":"01","url":"story_content/5sHg5oftC01_80_DX612_DY612.swf","type":"normal","altText":"Image 201.emf","width":612,"height":477,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":928,"yPos":352,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":153,"rotateYPos":119,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":306,"bottom":238,"altText":"Image 201.emf","pngfb":false,"pr":{"l":"Lib","i":248}},"html5data":{"xPos":0,"yPos":0,"width":306,"height":238,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":306,"bottom":238,"altText":"Image 201.emf","pngfb":false,"pr":{"l":"Lib","i":249}},"html5data":{"xPos":0,"yPos":0,"width":306,"height":238,"strokewidth":0}}}],"width":306,"height":238,"resume":true,"useHandCursor":true,"id":"6fnjDGOIWXm","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5fa7A3Bmiyy.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5fa7A3Bmiyy._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5fa7A3Bmiyy"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5itKaDq07GH.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5itKaDq07GH._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5itKaDq07GH"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6CDeqwTt2cz.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6CDeqwTt2cz._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6CDeqwTt2cz"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5lZYkMvf94p"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"depth":6,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"64EWxTguy6S_CorrectReview","id":"01","linkId":"64EWxTguy6S_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":158}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"64EWxTguy6S_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"64EWxTguy6S_IncorrectReview","id":"01","linkId":"64EWxTguy6S_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":160}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":159}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"64EWxTguy6S_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');