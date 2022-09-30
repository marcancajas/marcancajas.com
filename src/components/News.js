import { useState } from "react";
import NewsModalBox from "./NewsModalBox";

const News = () => {
    const [modal, setModal] = useState(false);
    const [modalValue, setModalValue] = useState(null);
    const [load, setLoad] = useState(false);
    const [hiddenItem, setHiddenItem] = useState(true);
    const [focusValue, setFocusValue] = useState("");
    const modalValueSet = (value) => {
        setModal(true);
        setModalValue(value);
    };
    const loadValueSet = (e) => {
        e.preventDefault();
        if (hiddenItem) {
            setLoad(true);
            setTimeout(() => {
                setLoad(false);
                setHiddenItem(false);
            }, 2000);
        }
    };
    const focusValueChange = () => {
        if (!hiddenItem) {
            setFocusValue("No more articles found");
        }
    };

    return (
        <section id="tips" className="section_tips">
            {modal && <NewsModalBox close={setModal} value={modalValue} />}
            <div className="container narrow">
                <div className="about_tips">
                    <div className="tip_title">
                        <h3>Latest News &amp; Tips</h3>
                    </div>
                    <div className="tip_text">
                        <p>I regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and share source files.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tips_content">
                    <ul className="modal_items" data-from="blog" data-count={5}>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(1)}
                                data-index={1}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/1.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>November 18, 2021</p>
                                <h5><a href="#">Emotional Slider Animation in After Effects</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">November 18, 2021</p>
                                    <h3 className="fn__title">Emotional Slider Animation in After Effects</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/1.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(2)}
                                data-index={2}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/2.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>September 15, 2021</p>
                                <h5><a href="#">Principle Tutorial &amp; Onboarding Flow Animation</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">September 15, 2021</p>
                                    <h3 className="fn__title">Principle Tutorial &amp; Onboarding Flow Animation</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/2.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(3)}
                                data-index={3}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/3.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>September 03, 2021</p>
                                <h5><a href="#">Ordering Ballooon Bouquets UI Design and Animation</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">September 03, 2021</p>
                                    <h3 className="fn__title">Ordering Ballooon Bouquets UI Design and Animation</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/3.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(4)}
                                data-index={4}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/4.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>August 20, 2021</p>
                                <h5><a href="#">How to Prepare Your Design Portfolio</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">August 20, 2021</p>
                                    <h3 className="fn__title">How to Prepare Your Design Portfolio</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/4.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(5)}
                                data-index={5}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/5.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>July 11, 2021</p>
                                <h5><a href="#">Lottie Animation &amp; After Effects Tutorial</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">July 11, 2021</p>
                                    <h3 className="fn__title">Lottie Animation &amp; After Effects Tutorial</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/5.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(6)}
                                data-index={6}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/6.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>June 05, 2021</p>
                                <h5><a href="#">How to prepare your design portfolio on Behance</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">June 05, 2021</p>
                                    <h3 className="fn__title">How to prepare your design portfolio on Behance</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/6.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li className={!hiddenItem ? "" : "be_animated"}>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(7)}
                                data-index={7}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/7.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>May 12, 2021</p>
                                <h5><a href="#">A Case for Becoming More Gentle in Your Life</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">May 12, 2021</p>
                                    <h3 className="fn__title">A Case for Becoming More Gentle in Your Life</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/blog/7.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                        <li className={!hiddenItem ? "" : "be_animated"}>
                            <div
                                className="item modal_item"
                                onClick={() => modalValueSet(8)}
                                data-index={8}
                            >
                                <div className="img_wrapper">
                                    <div className="abs_img" data-bg-img="img/blog/8.jpg"></div>
                                    <img src="img/blog/tip.png" alt="" />
                                </div>
                                <p>March 23, 2021</p>
                                <h5><a href="#">When Father’s Day is Different for You</a></h5>
                                <div className="fn__hidden">
                                    <p className="fn__cat">March 23, 2021</p>
                                    <h3 className="fn__title">When Father’s Day is Different for You</h3>
                                    <div className="img_holder">
                                        <img src="img/thumb/square.jpg" alt=""/>
                                            <div className="abs_img" data-bg-img="img/blog/8.jpg"></div>
                                    </div>
                                    <p className="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.</p>
                                    <p className="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                                    <p className="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis. Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac mattis mi sagittis. Morbi ut consectetur neque.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix" />
                    <div className="load_more">
                        <a
                            href="#"
                            data-done="Done"
                            className={load ? "loading" : ""}
                            data-no="No more articles found"
                            onClick={(e) => loadValueSet(e)}
                            onFocus={(e) => focusValueChange()}
                        >
                            <span className="text">
                                {hiddenItem
                                    ? "Load More Articles"
                                    : focusValue
                                        ? focusValue
                                        : "Done"}
                            </span>
                            <span className="fn__pulse">
                                <span />
                                <span />
                                <span />
                            </span>
                        </a>
                    </div>
                    {/* /Blog List */}
                </div>
            </div>
        </section>
    );
};

export default News;
